---
layout: default
title: Reed Systems Group
page_title: Reed Systems Group
---

this is a brief description of the projects going on in the systems group in the computer engineering department at SJSU. please contact [ben reed](../) if you would like to get involved. some students work on projects for a master's project or capstone project, while others get involved just for fun.

i highly recommend watching this video from julia evans (that i found on mastodon :) ) <https://www.youtube.com/watch?v=30YWsGDr8mA> . she presents a lot of ideas that align with my approach for working on hard problems.

## future projects (love to find people interested in)

these would be great capstone projects.

### embedded control application using osdyne (rust)

osdyne would like to do a project to showcase their operating system running on an embedded device like an arm (controlling the servos directly) or components of a car such as dash or control components.

goals of the project:

- implement a robotic arm or car console using osdyne embedded OS

students must:

- have strong c++ or rust programming skills
- be familiar with embedded systems

experience gained:

- work with a new cutting edge OS
- strong rust skills
- prototypes that will be demoed by osdyne

### USB cloner

`dd` can be used to burn an image on a USB fob, but it's much more complicated to do volume burning --- 10 at a time.
`dcfldd` is a tool that will do burns in parallel.
<https://github.com/pop-os/popsicle> is another open source tool in rust that we could extend.

goals of the project:

- optimize time to burn
- detect and recover from errors --- adjusting transfers to minimize errors
- support burn updates --- reburn a USB with only the things that have changed
- verify burns

students must:

- be comfortable with c++ or rust
- have a good grasp of basics of OS

experience gained:

- linux OS/storage interfaces
- USB/flash interfaces

### custom IPP printer server/filter

network printers usually use IPP as the printing protocol.
CUPS is the classic solution for doing printing.
this project implements a printer server that can be interposed between a client and another printer server or locally attached printer.
the big idea is to enable things like super customizable cover pages.
for example, given a table of IP addresses and strings, when the server receives something to print, it will put the string on the cover page.

goals of the project:

- implement an IPP server in go or java
- integrate a flexible templating language for the cover page

students must:

- have good go or java programming skills
- have some basic familiarity with networking concepts

experience gained:

- deeper understanding of networking protocols
- deep understanding of IPP --- a ubiquitous printing protocol
- deep understanding of file formats used in printing

### cellphone mapping app

write a KMP (works on iphone and android) app to map physical locations to scanned strings.
modern cellphones have ranging APIs using UWB that allow centimeter precision location.
using the app we want to build a layout of the room and map locations.
the app will be able to scan QR codes to build a table of locations to strings read from QR codes.
combined with the custom IPP printer server project this allows a way to route the source of a printout to an exact location.
**this project will only be started if the IPP printer server project is started.**

goals of the project:

- create a table of locations and strings stored in google sheets
- use ranging APIs to get location

students must:

- have solid java programming skills and be willing to learn kotlin
- at least 2 members of the team must have macs that can run xcode and all members must have a computer that can run android studio

experience gained:

- kotlin programming
- app development
- understanding of ranging APIs

## backburnered future projects

### pi server

i have almost 100 pis and a few POE switches.
it would be awesome to have a pi server that allows people to allocate a pi, image it, and use it as a server that they can ssh into and work on.
need to design a root booting strategy and a strategy for managing user specific storage so that pis aren't pinned to a user.

### click for bash

python click is awesome for creating nice commandlines.
we can use exec and #! to create a wrapper to:

- put help text in the leading comments
- do argument and option processing as specified in comments
- set environment variables or format invocation arguments to invoke the script or command being wrapped

this wrapper would be implemented in rust

## actively looking for people

### disconnected data distribution

<https://github.com/SJSU-CS-systems-group/DDD>

we live in a connected world, and we have come to count on connectivity to do even the most basic things in life. unfortunately, much of the world lacks connectivity. even in locations with good connectivity, natural disasters can knock out critical infrastructure. this project explores how to use intermittently connected transports to provide needed data connectivity. this project helps students gain experience in network protocols and file formats.

## finished

### java based mastodon server

### canvas integration tools

<https://github.com/SJSU-CS-systems-group/canvas_tool>

<https://github.com/SJSU-CS-systems-group/CodEval>

tools for helping to manage courses in Canvas. CodEval gives students immediate feedback on their submissions. [text2qti](https://github.com/gpoore/text2qti) is an excellent tool for generating Canvas exams. we need to extend it to generate paper exams from the same spec.

<https://github.com/SJSU-CS-systems-group/moth>

we are implementing a java based (spring boot) mastodon server that is compatible with mastodon clients. the mastodon server is written in ruby, which students aren't familiar with. by implementing the server in java, we can do future research project with mastodon in a familiar environment.

### wildfire storage management

<https://github.com/SJSU-CS-systems-group/wildstore>

we developed a tool to crawl our scientific datafiles NetCDF and share them with external researchers. looking for people interested in SpringBoot, storage, and security.

### write-ahead transaction log performance

write-ahead logs are key to the reliability of data management systems. they are designed to use dedicated storage systems. unfortunately, they don't always get deployed that way. this project explores how we can improve the performance of write-ahead logs on shared devices. this project helps students gain experience in storage system and the linux kernel.

### ZooKeeper historical performance

this project tracks the performance of ZooKeeper over time. we use a local cluster made up of raspberry pis and intel servers to run benchmarks. this project helps students gain experience in distributed systems and performance analysis.

### realtime linux on pi's to drive 3D printers

hard realtime used to be something that people wanted from linux, but over the years hardware has become so fast and operating systems so efficient that responsiveness is good enough. however, we still have devices, such as 3D printers, that need hard realtime to drive hardware, such as 3D printer motors. today, rather than trying to make something like linux drive the motors directly, microcontrollers are used with dedicated firmware to drive the motors. i'd love to work with some students to experiment with realtime extensions to drive 3D printing directly from a raspberry pi running linux.

### cat tracks

in california, the biggest killer of mountain lions is cars. we would like to collect more data on where lions, and animals in general, are being killed. we are developing an app and data collection backend to collect information on animal activity near roads to allow researchers to better understand where wildlife is coming into contact with roads and what kind of wildlife is being affected. this project helps students gain experience in mobile app development, network protocols, and cloud development. (we are in great need of students interested in android and iOS development!)
