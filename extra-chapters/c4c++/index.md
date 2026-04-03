---
layout: default
title: C for C++ Programmers | Chapters
---

# C for C++ Programmers

a short booklet to help C++ programmers get up to speed with C. each chapter is meant to help you understand a topic, but you will still want to reference API descriptions for more specifics.

## chapters

- [Chapter 0: How to Use This Booklet](ch00.pdf) — how to get the most out of this booklet, including tips, traps, and exercises.
- [Chapter 1: Introduction](ch01.pdf) — why learn C, the key differences from C++, and your first `printf("hello, world\n")`.
- [Chapter 2: Variables](ch02.pdf) — basic types, arrays, pointers, structs, and how C handles variables without `auto`, `std::string`, or classes.
- [Chapter 3: Strings](ch03.pdf) — null-terminated `char` arrays, string literals vs. arrays, and the `<string.h>` functions like `strlen`, `strcpy`, and `strcmp`.
- [Chapter 4: Expressions](ch04.pdf) — operators in C without overloading, assignment as an expression, arithmetic, comparison, logical, and bitwise operators.
- [Chapter 5: Control Flow](ch05.pdf) — `if`, `while`, `for`, `switch`, `break`, and `continue` — mostly familiar from C++ but with no range-based `for` or `std::optional`.
- [Chapter 6: Pointers](ch06.pdf) — declaring pointers, dereferencing, pointer arithmetic, pointers to pointers, and how arrays and pointers interact.
- [Chapter 7: Functions](ch07.pdf) — prototypes, definitions, pass by value, `const` parameters, and why there is no overloading or default arguments.
- [Chapter 8: Allocating Memory](ch08.pdf) — global, local, and static variables, the stack vs. the heap, and dynamic allocation with `malloc` and `free`.
- [Chapter 9: Numbers and Casting](ch09.pdf) — everything is a number in C, implicit conversions, explicit casts, and converting between strings and numbers.
- [Chapter 10: Standard I/O](ch10.pdf) — `scanf` for input, `printf` for output, file operations with `fopen`/`fclose`, and the `FILE *` stream model.
- [Chapter 11: Low-Level I/O](ch11.pdf) — file descriptors, `read`, `write`, `open`, `close`, and `lseek` — the POSIX system calls underneath `<stdio.h>`.
- [Chapter 12: Odds and Ends](ch12.pdf) — `exit` vs `return`, `extern "C"` for calling C from C++, pointer ownership patterns, and other practical topics.

## additional resources

- [Complete Booklet (all chapters)](c4c++.pdf)
- [Exercise Answers](c4c++-answers.pdf) — don't peek until you've worked out your own answers!
