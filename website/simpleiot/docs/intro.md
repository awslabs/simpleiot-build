---
id: intro
title: Welcome
---

# Welcome to SimpleIOT

<div align="center">
<img src="/simpleiot-build/img/intro/cloud-glow.png" />
</div>

What if you could go from this:

<div align="center">
<img src="/simpleiot-build/img/intro/drawing-pad.png" width="60%"/>
</div>

To this:

<div align="center">
<img src="/simpleiot-build/img/workshops/starter/sensordemo-color-change.jpg" width="60%" />
</div>

In 30 minutes (or less)? 

Here's the short version:

```
[SMASH CUT] 

(Open Terminal)

> pip3 install simpleiot-cli
> iot toolchain install
(Wait 5m)

> iot cloud install
(Wait 15m)
...

> export IOT_TEAM=my-team
> export IOT_WIFI_SSID="{your wifi SSID}"
> export IOT_WIFI_PASSWORD="{your wifi password}"

iot auth login
iot project add --name=SensorDemo --template=sensordemo
iot device add --project=SensorDemo --model=SensorDemoModel --serial=SD-0001
iot firmware generate --project=SensorDemo --serial=SD-0001 --name=sensordemo

(Unbox Starter Kit. Plug in sensors and wires: 5m)

iot firmware flash --zip=sensordemo-arduino-esp32.zip
(Wait 5m)

(Check watch. 👊🏻)
```

There are so many things you can do:

<div align="center">
<img src="/simpleiot-build/img/intro/overview.png" width="70%"/>
</div>

Check your AWS account. Your cloud infrastructure should look like this:

<div align="center">
<img src="/simpleiot-build/img/data/architecture.png" width="100%"/>
</div>

🏆 **Congratulations**! 

You just built an end-to-end, secure, connected device that can send data to the cloud in real-time. 

... In your own account. 

... Where you own all the code and data.

... 100% Open-Source.

:::tip
Best part: since you've already installed the bits above, your next idea will take even less time.
:::

If you haven't picked up a Starter Kit yet, you can [purchase one here](https://m5stack.com).

<div align="center">
<br />
<b>Let's take a peek under the hood...</b>
<p />
<a href="/docs/concepts"><img src="/simpleiot-build/img/intro/touch-icon.png" width="5%"/></a>
</div>