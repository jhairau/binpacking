# Bin Packing Mono Repo

## Installation
This mono repo uses [Microsoft Rush](https://rushjs.io/)
 
```
$ npm install -g @microsoft/rush
$ cd binpacking
$ rush install
```

## Building
```
$ rush build
```

## Packages
### [Bin Packing Library](https://github.com/jhairau/binpacking/tree/master/libraries/bin-packing)
4D Bin Packing (Width, Height, Depth and Weight) algorithm that uses Best Fit Decreasing by default.

#### Custom Ordering/Sorting Algorithm
You can pass your own sorting algorithm to Packer. A use case is you have a predefined picking line in your 
facility that isn't ordered by largest to smallest and you want your pickers to pick and move in a single direction.  

### [Bin Packing Viewer Application](https://github.com/jhairau/binpacking/tree/master/apps/viewer)
A simple viewer example for visualising the packed bins in 3D space
