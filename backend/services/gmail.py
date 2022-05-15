import os
import base64

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from email.mime.text import MIMEText

SCOPES = [
    "https://www.googleapis.com/auth/gmail.send",
    "https://www.googleapis.com/auth/gmail.compose"
]

class Client:
    def __init__(self):
        self.creds = None
        self.service = None

        self._getCredentials()
        self._getService()

    def _getService(self):
        self.service = self.service = build("gmail", "v1", credentials= self.creds)

    def _getCredentials(self):
        if os.path.exists("token.json"):
            self.creds = Credentials.from_authorized_user_file("token.json", SCOPES)
            
        if not self.creds or not self.creds.valid:
            if self.creds and self.creds.expired and self.creds.refresh_token:
                self.creds.refresh(Request())
            else:
                if not os.path.exists("credentials.json"):
                    print("Unable to find credentials.json, email alerts are going to be disabled")
                    return

                flow = InstalledAppFlow.from_client_secrets_file("credentials.json", SCOPES)
                self.creds = flow.run_local_server(port= 0)

                with open("token.json","w") as token:
                    token.write(self.creds.to_json())

    def sendEmail(self, email, subject, rawMessage):
        if not self.creds or not email:
            return

        message = MIMEText(rawMessage)

        message["to"] = email
        message["subject"] = subject

        decodedMessage = base64.urlsafe_b64encode(message.as_bytes())
        decodedMessage = decodedMessage.decode()
        body = { "raw": decodedMessage }

        self.service.users().messages().send(userId = "me", body = body).execute()
