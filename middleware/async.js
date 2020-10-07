const asyncHandler = fn => (next) =>
    Promise.resolve(fn()).catch(next); 

module.exports = asyncHandler;