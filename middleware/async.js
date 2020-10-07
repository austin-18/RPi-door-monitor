const asyncHandler = fn => () =>
    Promise.resolve(fn()).catch(next); 

module.exports = asyncHandler;