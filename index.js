const Discord = require("discord.js");
const { EmbedBuilder, GatewayIntentBits, ButtonStyle} = require("discord.js");
const INTENTS = Object.entries(Discord.IntentsBitField.Flags).filter(([K]) => ![].includes(K)).reduce((t, [, V]) => t | V, 0)
const client = new Discord.Client({intents: INTENTS}) 
const Util = require('util') 
const {Collection} = require("discord.js"),
      {readdirSync} = require("fs")
const db = require("croxydb"); 
const { ActionRowBuilder, ButtonBuilder, MessageAttachment } = require("discord.js");
const got = require("got");
const express = require('express')
const app = express()
const Canvas = require('canvas') 
const fetch = ("node-fetch");
const fs = require("fs");
const ws = require("ws")

require("./utils/slash-loader.js")(client);

client.token = "MTA0MDI3NTQyODU4NzM0ODA4OQ.Gwb9VC.GoP3WyAn8kMNVolXMbM3XzDgKdXMh48BY5IFKQ"
client.login("MTA0MDI3NTQyODU4NzM0ODA4OQ.Gwb9VC.GoP3WyAn8kMNVolXMbM3XzDgKdXMh48BY5IFKQ")