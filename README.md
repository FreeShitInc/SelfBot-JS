# USE AT YOUR OWN RISK
First version of discord self bot that has almost nothing in it
give me ideas what should i add to this, (ping me on discord or make an issue with suggestions tag)

in config.json you need to put your discord token in and a list of user ids who will be able to run commands
also optionaly change the autodelete (self explanatory) and prefix (can be multiple characters, if my prefix is ~mt then i run a command like **~mt**spam)

to run you need nodeJs and npm installed, then just npm run start

available commands:
- spam <message> - spams a message
- stop - stops spamming or other actions
- roleinfo <@role or role id> - gets color name and permissions of a role
- b64encode <to_encode> - encodes a message to base64
- b64decode <to_decode> - decodes the message from base64
