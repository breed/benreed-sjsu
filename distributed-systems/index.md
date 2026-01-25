---
layout: default
title: distributed systems
page_title: distributed systems
---

my research and teaching focus is operating systems and distributed systems. since i am frequently asked about reading lists and blogs, i will start collecting a list of them here:

## blogs

<https://www.the-paper-trail.org/>

<https://perspectives.mvdirona.com/>

<https://scalingsystems.com/category/distributed-systems/>

## papers

### from my CS 249 class

- ZooKeeper: <https://www.usenix.org/legacy/events/atc10/tech/full_papers/Hunt.pdf> - i'm an author, but we use ZooKeeper in class projects, so it's a good starting paper.
- Lamport clock: <https://amturing.acm.org/p558-lamport.pdf> - classic way to think about time in distributed systems.
- Vector clocks: <https://www.vs.inf.ethz.ch/publ/papers/VirtTimeGlobStates.pdf> - another classic way to track time with more information.
- CAP: <https://users.ece.cmu.edu/~adrian/731-sp04/readings/GL-cap.pdf> - classic practical way at looking at the trade offs we make in distributed systems.
- FLP: <https://groups.csail.mit.edu/tds/papers/Lynch/jacm85.pdf> - classic paper about the limits of any consensus algorithm.
- ADB: <https://groups.csail.mit.edu/tds/papers/Attiya/TM-423.pdf> - a very early simple distributed register implementation.
- Paxos: <https://lamport.azurewebsites.net/pubs/paxos-simple.pdf> - a concise (it's not simple) way of describing paxos.
- BFT: <https://www.cs.princeton.edu/courses/archive/fall17/cos418/papers/bft.pdf> - the classic byzantine fault tolerance paper.
- agreement & execution: <http://www.cs.cornell.edu/lorenzo/papers/sosp03.pdf> - this paper has a lot of ideas. for me the greatest contribution is highlighting that consensus can be broken into two parts and each part has different properties and requirements.
- RSM: <https://www.cs.cornell.edu/fbs/publications/SMSurvey.pdf> - a very complicated way to talk about RSM. i haven't found a better paper.
- primary/backup: <https://www.cs.cornell.edu/fbs/publications/DSbook.c8.pdf> - a very complicated way to talk about primary/backup. again, i haven't found a better paper :'(
- dynamo: <https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf> - an interesting example of relaxing requirements to solve a practical problem. i am bitter that they broke the term "eventual consistency"...
- chain replication: <https://www.cs.cornell.edu/home/rvr/papers/OSDI04.pdf> - a very nice example of a simple replication protocol. we implement it in class, and it's a great learning experience for how difficult it is to implement distributed systems. (most students implement it quickly, show that it works, and then their implementation fails when it tries to interoperate with other students.)
- wait free synchronization: <http://dx.doi.org/10.1145/114005.102808> - a nice paper to show how different primitives compose and how you show bounds.
- concurrent objects: <https://lamport.azurewebsites.net/pubs/interprocess.pdf> - a very complicated paper, but it has important discussions about concurrent modifications.
- witnesses: <http://www2.cs.uh.edu/~paris/MYPAPERS/Icdcs86.pdf> - a simple idea of dataless replicas that needs to be used more!
- GFS: <https://static.googleusercontent.com/media/research.google.com/en//archive/gfs-sosp2003.pdf> - a classic large scale distributed file system.
- big table: <https://static.googleusercontent.com/media/research.google.com/en//archive/bigtable-osdi06.pdf> - a classic large scale distributed key/value store.
- map/reduce: <https://static.googleusercontent.com/media/research.google.com/en//archive/mapreduce-osdi04.pdf> - a classic large scale data processing engine.
- raft: <https://web.stanford.edu/~ouster/cgi-bin/papers/raft-atc14> - a relatively recent atomic broadcast algorithm. it brings back some of the concepts of an earlier paper on view stamped replication. people lump it in with paxos, but it has some very important differences, especially to engineers. it also gets you closer to where you want to be: paxos gets a decision made, raft does that and ensures that it is propagated.
- DHT: <https://www.cs.princeton.edu/courses/archive/fall17/cos418/papers/chord.pdf> - classic distributed hash table paper.
- ceph: <https://www.ssrc.ucsc.edu/Papers/weil-osdi06.pdf> - a more modern take on DHT that takes into account data center structure.

### previous CS 249 papers

- flexible quorum systems: <https://arxiv.org/pdf/1608.06696v1.pdf> - a nice, if impractical, way of looking at quorum systems. it gives great insight into the different phases of some consensus algorithms.
- Active disk paxos: <https://groups.csail.mit.edu/tds/papers/Chockler/podc-02.pdf> - an interesting way of using disks with a little extra functionality to achieve consensus.
- virtual synchrony: <https://www.cs.cornell.edu/home/rvr/sys/p123-birman.pdf> - a classic paper of using causality in distributed systems.
- Paxos: <https://lamport.azurewebsites.net/pubs/lamport-paxos.pdf> - this is the real paxos paper! it is one of my favorite papers to read. it's the first one. it has a lot of ideas that get lost in later paxos work.
