Tailwind Configuration Package
Our Tailwind Configuration Package offers a custom configuration for Tailwind CSS. It comes with a set of pre-defined themes, utility classes, and all necessary Tailwind-related packages.

## Installation
Follow these steps to install the Tailwind Configuration Package:

## Step 1
Run the following command in your project directory:

yarn add @repo/ui/tailwind-config @latest

## Step 2
Create two configuration files in your project:

Tailwind.config.js
Postcss.config.js
In these files, import the respective configurations from the installed package:

### In Tailwind.config.js:

import { tailwindConfig } from "@repo/ui/tailwind-config ";

export default {presets:[tailwindConfig], content: [...tailwindConfig.content,'../../node_modules/@repo/ui/**/**/es/index.js']}

### In Postcss.config.js:

import { postconfig } from "@repo/ui/tailwind-config ";

export default postConfig

### Import Style file inside the root component

import '@repo/ui/tailwind-config /styles/tailwind.css'




