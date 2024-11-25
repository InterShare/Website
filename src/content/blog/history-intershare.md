---
title: "A Brief History of InterShare"
description: "How InterShare came to be"
pubDate: "2024-11-22"
heroImage: "/blog/intershare-history/blog-smts.png"
---

# Send Me That Shit

The development of InterShare began in 2021. Back then, it wasn't called InterShare but rather "SMTS," which stood for "Send Me That Shit."  
SMTS was a very simple command-line tool designed to share files easily over a Wi-Fi network.

![blog placeholder](/blog/intershare-history/smts-screenshot.png)

The key features of SMTS were its portability and ease of use (for computer nerds). I initially developed SMTS because I often needed a simple solution to share files between my Linux and macOS computers. Soon, some of my tech-savvy friends in school started using SMTS to share class notes and other materials.

Initially, SMTS was only available as a command-line tool for Linux, Windows, and macOS (written in C#). However, once some of my friends started using it, I also wrote a simple iOS and Android app using C# and Xamarin.

SMTS never used any form of Bluetooth. In fact, the very first versions had no automatic discovery of nearby devices at all—you had to manually enter the recipient's IP address.  
For example: `smts send 192.168.42.120 file.txt`

When I developed the mobile app, I wanted to implement some form of automatic discovery. I used the [Bonjour protocol](https://developer.apple.com/bonjour/) and manual UDP broadcasts. With this, SMTS was theoretically able to find devices in the same network automatically. In practice, the discovery process was far from reliable. Particularly in large Wi-Fi networks like those in schools or public spaces, network configurations by administrators often prevented these methods from functioning correctly.

# SMTS, But With GUI

Gradually, SMTS started gaining more features as I enjoyed developing it. Alongside, I created a real UI app for macOS, Linux, and Windows (which looked terrible).

![blog placeholder](/blog/intershare-history/windows-smts.png)

At this stage, I renamed SMTS to InterShare to make it sound more professional. I also developed the GUI app in C# using the [Eto.Forms](https://github.com/picoe/Eto) framework.  
At this point, InterShare was entirely written in C#, with a Xamarin app for Android and iOS and the desktop app built in Eto.Forms. From a development perspective, this was great because it simplified maintenance and the addition of new features.

However, this approach came at the expense of the user experience. The desktop app was very slow, and on Windows, it looked like a relic from the 90s (slightly exaggerating).

# Rewrite!

I wanted InterShare to be a modern, fast, and user-friendly app. This led me to the decision to write individual native apps for each platform.

However, this decision came with a challenge: I needed to use different programming languages for almost every platform. Rewriting the same file transfer protocol in multiple languages would have taken too much time and been a nightmare to maintain as a solo developer.

**Rust to the Rescue.**  
The programming language Rust provided a solution. With Rust, I could write the protocol once and reuse it across all the required platforms. Mozilla created an excellent tool called [Uniffi](https://github.com/mozilla/uniffi-rs), which exposes Rust code to other languages. Uniffi includes a language generator that produces the necessary glue code to connect Rust with various foreign languages.

Using Rust, I developed an entirely new protocol for file sharing. I also added capabilities for Bluetooth Low Energy (BLE) to discover nearby devices and transfer files when Wi-Fi wasn’t available.

Now, my primary targets were Android and iOS. I wanted to prioritize these two platforms before expanding to Windows, macOS, and Linux. Writing a new app for each operating system took time, but the result was worth it. The performance is exceptional, and the native user interfaces make the app a joy to use.

InterShare is now available as a beta release, not just for iOS and Android, but also for macOS. Windows is on the way, and Linux support is planned for the future.
