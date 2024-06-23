//Please implement your chunk

//chunk([1,2,3,4], 1)
    //[[1], [2], [3], [4]]

//chunk([1,2,3,4], 2)
    //[[1, 2], [3, 4]]

    function chunk(arr, size) {
        let result = [];
        let miniAns = []

        for(let i=0; i<arr.length; i++) {
            miniAns?.push(arr[i]);
            if(miniAns.length === size || i == arr.length -1) {
                result.push([...miniAns]);
                miniAns.length = 0
            }

        }
        console.log(result)
        return result;
    }

    chunk([1,2,3,4], 1)

    chunk([1,2,3,4], 2)

