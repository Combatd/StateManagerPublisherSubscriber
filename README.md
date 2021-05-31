# State Manager: Publisher-Subscriber Pattern
This is going to be a tool to keep track of global state for an application. 

This is a single source of truth where all data is published across an application, where other components can subscribe and invoke functions to make changes to attributes.

The API will be strict, so that only action functions can be called to uplift the attributes of state.

# Phase 1: The Store Class
I will be using ES6 JavaScript syntax to represent an instantiated ```Store``` object that holds globally accessible attributes. 

The ```Store#constructor``` has a ```rootReducer``` parameter, which will be a callback returning the initial state. as they break up different component states into their own attributes on the global state.

The state is supposed to be immutable, or not changed from original attribute values in anyway, so I will simply return a shallow copy of the ```this.state``` with ```Object.assign```. Due to it having the same references in memory for nested collections as the original state, I will likely need to refactor this later.

# License Information
```
    State Manager - A demonstration of the publisher-subscriber design pattern in JavaScript
    Copyright (C) 2021 Mark Calvelo

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License along
    with this program; if not, write to the Free Software Foundation, Inc.,
    51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
```