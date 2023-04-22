function serialize(arr) {
  if (!arr || arr.length === 0) {
    return "";
  }

  let diffArr = arr.slice(1).map((val, i) => val - arr[i] + 1);
  diffArr.unshift(arr[0] + 1);

  const convertToBinary = diffArr.reduce((acc, diff) => {
    if (diff > 127 && diff < 255) {
      acc.push(Buffer.from([0, diff - 128]).toString("binary"));
      return acc;
    } else if (diff >= 255) {
      acc.push(Buffer.from([1, diff - 256]).toString("binary"));
      return acc;
    } else {
      acc.push(Buffer.from([diff]).toString("binary"));
      return acc;
    }
  }, []);

  return convertToBinary.join("");
}

function deserialize(arr) {
  if (!arr || arr.length === 0) {
    return [];
  }

  const diffArr = new Uint8Array(Buffer.from(arr, "binary"));

  const deserializedArr = diffArr.reduce(
    (acc, diff) => {
      if (diff >= 1) {
        if (acc.result.length === 0) {
          acc.result.push(diff + acc.temp - 1);
        } else {
          acc.result.push(
            diff + acc.result[acc.result.length - 1] + acc.temp - 1
          );
        }
        acc.temp = 0;
        return acc;
      } else {
        acc.temp = (diff + 1) * 128;
        return acc;
      }
    },
    { temp: 0, result: [] }
  );

  return deserializedArr.result;
}

function output(arr) {
  const serializedArr = serialize(arr.sort((a, b) => a - b));
  const deserializedArr = deserialize(serializedArr);
  const uncompressedSize = arr.length * 2;
  const compressedSize = serializedArr.length;
  const compressionRatio = 1 - compressedSize / uncompressedSize;
  console.log(deserializedArr);
  console.log(serializedArr);
  console.log(compressionRatio);
}

const arr = [300, 43, 3, 66, 77, 72, 1, 274];
output(arr);
module.exports = { serialize, deserialize };
