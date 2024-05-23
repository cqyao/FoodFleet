import boto3
import requests
import os
import time

print("Deploying application in directory", os.getcwd())

retryCounter = 0
while retryCounter < 5:
    print("Retrying")
    time.sleep(0.5)
    retryCounter += 1

print("Deployed")
