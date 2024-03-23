# GUI-Web-app-MQTT
Update GUI + SSL MQTT from Previous HTTP MQTTwebapp (Only have push button)

<a href="https://www.buymeacoffee.com/T_TIamCrying"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=T_TIamCrying&button_colour=FF5F5F&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" /></a>

It is bad that the IOS device like homekit or IoT MQTT pannel app didn't have include push button with have 0 or 1 feature on app.
I have working on making IOT MQTT with rcswitch and finding hardtime on this issue. 

This project aims to:

- Allow me to use SmartRC-CC1101 with a web app.
- Solve the problem of the absence of a push button on the iOS app and allow users to connect to TSL/SSL to the MQTT server using Paho MQTT.js (Develop from MQTTwebapp - HighVoltages).
=============================================================================
To get started:(Edit the Code)
- Install Node.js + Gridstack.js
- Enjoy!
=============================================================================
Features:
   - Login MQTT + SSL/TSL (if you want to disable SSL, you could go to the JavaScript script that mentions "useSSL: true").
   - When you log in, it will automatically save the session as long as you are disconnected.

Publish:
  - When you click "+", it will prompt you to enter the name of the button, topic, OnState message, and Offstate message.
  - List of publish words: "setMHZ" and "setPIN".

Subscription:
  - You can see the monitor screen near the login; I subscribe with the word "Monitor".

Widget:
  - You can drag and drop the widget on the screen freely without refreshing.
=============================================================================
Bugs/Obstacles:
* When deleting the widget, there is one empty widget left with an empty ID {I hope someone could help debug! It's in the future}.
* I don't have time to add more entries like "Graph, switch, and others..." and due to this project's focus on applying RCswitch + ESP32 MQTT.
* How to deploy the native app or serverless web app.
=============================================================================
Confessing the sins:
I recently heard about Node-RED, but I ignored using it because I realized it needs a Raspberry Pi to host the web. If you come across this project to create the web app and you are still a beginner, I suggest starting with Node-RED. I don't want you to spend time constructing messy code.
=============================================================================
Humble apologies:
If there are any troubles in this project, I am a novice here. The JavaScript is challenging to solve problems with, but the app will work fine on a local server.

***If you find this project benefit to you, you can buy my Americano Coffee to allow me to sustain my life next day. 
