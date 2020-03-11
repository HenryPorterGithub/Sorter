        //fetch JSON
        var xhReq = new XMLHttpRequest();
        xhReq.open("GET", 'https://my-json-server.typicode.com/HenryPorterGithub/demo/data', false);
        xhReq.send(null);
        var jsonObject = JSON.parse(xhReq.responseText);
        console.log(jsonObject);

        //presort timespan values
        for (var i = 0; i < jsonObject.length; i++) {

            var timespan = jsonObject[i].timespan;

            var y = timespan.indexOf('y');
            var m = timespan.indexOf('m');
            var w = timespan.indexOf('w');
            var d = timespan.indexOf('d');

            var x = [y, m, w, d];

            //d error - other forms of error checking would be redundant within scope of the exercise
            if (d < m && d != -1 && m != -1) {
                console.log(x);
                console.log(jsonObject[i]);
                console.log("d-m error");

                console.log(timespan);
                console.log(d);
                var xD = timespan.substring(d - 1, d + 1);
                var xM = timespan.substring(m - 1, m + 1);
                var xMD = xM + xD;
                console.log("presorted timespan " + xMD);
                jsonObject[i].timespan = xMD;
            }
        }

        //post unsorted data
        var containerDiv = document.getElementById("ranking");

        for (var i = 0; i < jsonObject.length; i++) {

            var output =
                "Timespan: " + jsonObject[i].timespan +
                ", Dataset: " + jsonObject[i].dataset +
                ", Value: " + jsonObject[i].value;

            var list = document.createElement('li');

            list.innerHTML = output;

            containerDiv.appendChild(list);
        }

        function sortMethodA() {

            console.log("A");
            //sortA
            function rankingSorterA(firstKey, secondKey, thirdKey) {
                return function(a, b) {
                    if (a[firstKey] > b[firstKey]) {
                        return 1;
                    } else if (a[firstKey] < b[firstKey]) {
                        return -1;
                    } else {

                        if (a[secondKey] > b[secondKey]) {
                            return 1;
                        } else if (a[secondKey] < b[secondKey]) {
                            return -1;
                        } else {
                            return 0;
                        }

                        if (a[thirdKey] > b[thirdKey]) {
                            return 1;
                        } else if (a[thirdKey] < b[thirdKey]) {
                            return -1;
                        } else {
                            return 0;
                        }
                    }
                }
            }
            var sortedA = jsonObject.sort(rankingSorterA("timespan", "dataset", "value"));

            //post sorted data
            var containerDivA = document.getElementById("rankingA");

            for (var i = 0; i < sortedA.length; i++) {

                var outputA =
                    "Timespan: " + sortedA[i].timespan +
                    ", Dataset: " + sortedA[i].dataset +
                    ", Value: " + sortedA[i].value;

                var listA = document.createElement('li');

                listA.innerHTML = outputA;

                containerDivA.appendChild(listA);
            }
        }

        function sortMethodB() {

            //sortB
            function rankingSorterB(firstKey, secondKey, thirdKey) {
                return function(a, b) {
                    if (a[secondKey] > b[secondKey]) {
                        return 1;
                    } else if (a[secondKey] < b[secondKey]) {
                        return -1;
                    } else {

                        if (a[firstKey] > b[firstKey]) {
                            return 1;
                        } else if (a[firstKey] < b[firstKey]) {
                            return -1;
                        } else {
                            return 0;
                        }

                        if (a[thirdKey] > b[thirdKey]) {
                            return 1;
                        } else if (a[thirdKey] < b[thirdKey]) {
                            return -1;
                        } else {
                            return 0;
                        }
                    }
                }
            }
            var sortedB = jsonObject.sort(rankingSorterB("timespan", "dataset", "value"));

            //post sorted data
            var containerDivB = document.getElementById("rankingB");

            for (var i = 0; i < sortedB.length; i++) {

                var outputB =
                    "Timespan: " + sortedB[i].timespan +
                    ", Dataset: " + sortedB[i].dataset +
                    ", Value: " + sortedB[i].value;

                var listB = document.createElement('li');

                listB.innerHTML = outputB;

                containerDivB.appendChild(listB);
            }
        }
