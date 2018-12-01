## 4D Bin Packing
We are using the [First Fit Decreasing (FFD)](https://en.wikipedia.org/wiki/Bin_packing_problem#First-fit_algorithm) algorithm. There are no current plans
to implement [Modified First Fit Decreasing (MFDD)](https://en.wikipedia.org/wiki/Bin_packing_problem#First-fit_algorithm) algorithm

The four dimensions we are using are width, height, depth and weight.

Note: This library does what  is known as offline bin packing, essentilally this means that we know all of the items 
we are going to pack ahead of time opposed to online bin packing where they items come in as a stream and you can't
optimally order by dimensions or weight all at once

## Research
Accorindg to [Article](http://drops.dagstuhl.de/opus/volltexte/2013/3963/pdf/51.pdf) it claims that first fit bin packing
is 1.7 optimum bin packing. Which translates to 1.7 bins used for FFD vs OPT bin packing. Which is isn't a bad thing for 
speed of calculation and speed of packing and unpacking of the bin by a person

### First Fit Decreasing


### Best Fit Decreasing

### Credit
Thank you to github user [Olragon](https://github.com/olragon) for creating the repo [https://github.com/olragon/binpackingjs](https://github.com/olragon/binpackingjs).
It provided me with a starting codebase, terminoligy and references to studies that helped me adapt his library into mine.
They key difference between our libraries is that with his you provide a set amount of bins. With this library you pass a set variation
of bin sizes. With his library you attempt to fill the bins provided, with this library you attempt to fill the types of bins any amount of times.