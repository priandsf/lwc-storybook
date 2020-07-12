# LWC Storybook

## About
Sample LWC application that shows how to integrate with Storybook. It also uses Web Component Analyzer to generate the component meta-data files.

## Demo project layout
This project is a mono repo, powered by learna, and contains two packages:  

- A reusable library of components (lwc-library).  
- An application consuming the library (lwc-app).  

The demo is base on the 6.0+ version of story books that implements the composition mechanism, and thus showas how the main app can render the stories coming from the library.


## Getting started

To execute the sample application:  

```sh
yarn
yarn build 
yarn start
```

To execute the stories from the component library:  

```sh
cd packages/lwc-library/
yarn storybook
```

To execute the stories from the application:  

```sh
cd packages/lwc-app/
yarn storybook
```

## Implementing Storybook

### Application bundler

Storybook is using Webpack as the application bundler. Unfortunately, LWC is generally using Rollup and there is no supported Webpack plugin. As a result, we'll use Rollup to build the components and Webpack to run the application. This has several consequences:  

- There are 2 build steps, on for the components and one for storybook itself. 
- The components displayed as part of a story must be custom elements.  
  Custom elements limit the values to be passed to the components, as HTML only allow string literals as attributes. To pass more complex values, the developer must create wrappers.  

### Project layout


### Documenting Web Components

If there is not official way to document web components yet, there are two complimentary technologies that we'll use:  

- custom-elements.json
  
- JSDoc extension

if writting custom-elements.json file manually is cumbersome,

web-componeht-analyzer


### Mocking data services





