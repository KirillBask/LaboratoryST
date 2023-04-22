describe("Tests for serialize and deserialize functions", () => {
  const { serialize, deserialize } = require("./app");

  it("should correctly compress and decompress an short array", () => {
    const arr = [1, 3, 5, 7, 4];
    const sortArr = arr.sort((a, b) => a - b);
    const serializedArr = serialize(sortArr);
    const deserializedArr = deserialize(serializedArr);
    expect(deserializedArr).toEqual(sortArr);
    const uncompressedSize = arr.length * 2;
    const compressedSize = serializedArr.length;
    const compressionRatio = 1 - compressedSize / uncompressedSize;
    console.log(deserializedArr);
    console.log(serializedArr);
    console.log(compressionRatio);
  });  

  it("should correctly compress and decompress an array of 50 random integers", () => {
    const startArr = 1;
    const endArr = 301;
    const arr = Array.from(
      { length: 50 },
      () => Math.floor(Math.random() * endArr) + startArr
    );
    const sortArr = arr.sort((a, b) => a - b);
    const serializedArr = serialize(sortArr);
    const deserializedArr = deserialize(serializedArr);
    expect(deserializedArr).toEqual(sortArr);
    const uncompressedSize = arr.length * 2;
    const compressedSize = serializedArr.length;
    const compressionRatio = 1 - compressedSize / uncompressedSize;
    console.log(deserializedArr);
    console.log(serializedArr);
    console.log(compressionRatio);
  });

  it("should correctly compress and decompress an array of 100 random integers", () => {
    const startArr = 1;
    const endArr = 301;
    const arr = Array.from(
      { length: 100 },
      () => Math.floor(Math.random() * endArr) + startArr
    );
    const sortArr = arr.sort((a, b) => a - b);
    const serializedArr = serialize(sortArr);
    const deserializedArr = deserialize(serializedArr);
    expect(deserializedArr).toEqual(sortArr);
    const uncompressedSize = arr.length * 2;
    const compressedSize = serializedArr.length;
    const compressionRatio = 1 - compressedSize / uncompressedSize;
    console.log(deserializedArr);
    console.log(serializedArr);
    console.log(compressionRatio);
  });

  it("should correctly compress and decompress an array of 500 random integers", () => {
    const startArr = 1;
    const endArr = 301;
    const arr = Array.from(
      { length: 500 },
      () => Math.floor(Math.random() * endArr) + startArr
    );
    const sortArr = arr.sort((a, b) => a - b);
    const serializedArr = serialize(sortArr);
    const deserializedArr = deserialize(serializedArr);
    expect(deserializedArr).toEqual(sortArr);
    const uncompressedSize = arr.length * 2;
    const compressedSize = serializedArr.length;
    const compressionRatio = 1 - compressedSize / uncompressedSize;
    console.log(deserializedArr);
    console.log(serializedArr);
    console.log(compressionRatio);
  });

  it("should correctly compress and decompress an array of 1000 random integers", () => {
    const startArr = 1;
    const endArr = 301;
    const arr = Array.from(
      { length: 1000 },
      () => Math.floor(Math.random() * endArr) + startArr
    );
    const sortArr = arr.sort((a, b) => a - b);
    const serializedArr = serialize(sortArr);
    const deserializedArr = deserialize(serializedArr);
    expect(deserializedArr).toEqual(sortArr);
    const uncompressedSize = arr.length * 2;
    const compressedSize = serializedArr.length;
    const compressionRatio = 1 - compressedSize / uncompressedSize;
    console.log(deserializedArr);
    console.log(serializedArr);
    console.log(compressionRatio);
  });

  it("should correctly compress and decompress an array of single-digit integers", () => {
    const startArr = 1;
    const endArr = 10;
    const arr = Array.from({ length: endArr }, (_, i) => i + startArr);
    const serializedArr = serialize(arr);
    const deserializedArr = deserialize(serializedArr);
    expect(deserializedArr).toEqual(arr);
    const uncompressedSize = arr.length * 2;
    const compressedSize = serializedArr.length;
    const compressionRatio = 1 - compressedSize / uncompressedSize;
    console.log(deserializedArr);
    console.log(serializedArr);
    console.log(compressionRatio);
  });

  it("should correctly compress and decompress an array of two-digit integers", () => {
    const startArr = 10;
    const endArr = 90;
    const arr = Array.from({ length: endArr }, (_, i) => i + startArr);
    const serializedArr = serialize(arr);
    const deserializedArr = deserialize(serializedArr);
    expect(deserializedArr).toEqual(arr);
    const uncompressedSize = arr.length * 2;
    const compressedSize = serializedArr.length;
    const compressionRatio = 1 - compressedSize / uncompressedSize;
    console.log(deserializedArr);
    console.log(serializedArr);
    console.log(compressionRatio);
  });

  it("should correctly compress and decompress an array of three-digit integers", () => {
    const startArr = 100;
    const endArr = 301;
    const arr = Array.from({ length: endArr }, (_, i) => i + startArr);
    const serializedArr = serialize(arr);
    const deserializedArr = deserialize(serializedArr);
    expect(deserializedArr).toEqual(arr);
    const uncompressedSize = arr.length * 2;
    const compressedSize = serializedArr.length;
    const compressionRatio = 1 - compressedSize / uncompressedSize;
    console.log(deserializedArr);
    console.log(serializedArr);
    console.log(compressionRatio);
  });

  it("should correctly compress and decompress an array of 900 integers, each consisting of three identical digits", () => {
    const startArr = 1;
    const endArr = 301;
    let arr = [];
    for (let i = startArr; i < endArr; i++) {
      arr.push(i, i, i);
    }
    const serializedArr = serialize(arr);
    const deserializedArr = deserialize(serializedArr);
    expect(deserializedArr).toEqual(arr);
    const uncompressedSize = arr.length * 2;
    const compressedSize = serializedArr.length;
    const compressionRatio = 1 - compressedSize / uncompressedSize;
    console.log(deserializedArr);
    console.log(serializedArr);
    console.log(compressionRatio);
  });
});
