export const flattenObject = (object) => {
    return Object.entries(object).reduce((flattenedObject, [key, value]) => {
      if (typeof value === "object") {
        return {
          ...flattenedObject,
          ...flattenObject(value)
        };
      }
  
      return {
        ...flattenedObject,
        [key]: value
      };
    }, {});
  };  