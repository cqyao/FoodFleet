import boto3
import requests
import os
import time

print("Deploying application in directory", os.cwd())

retryCounter = 0
while retryCounter < 5:
    time.sleep(0.5)
    retryCounter += 1
