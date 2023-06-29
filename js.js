function B1() {
    var
        n1 = document.getElementById("n1"),
        n2 = document.getElementById("n2"),
        n3 = document.getElementById("n3"),
        num1 = document.getElementById("num1"),
        num2 = document.getElementById("num2"),
        num3 = document.getElementById("num3"),
        n = n1.value;
    // tim so be nhat
    if (Number(n) > n2.value) {
        n = n2.value;
        if (Number(n) > n3.value) {
            n = n3.value;
        }
    }
    num1.value = n;
    n = n1.value;
    if (Number(n) < n2.value) {
        n = n2.value;
        if (Number(n) < n3.value) {
            n = n3.value;
        }
    }
    num3.value = n;
    if (n1.value == num3.value || n1.value == num1.value) {
        num2.value = n1.value;
        if (n2.value == num3.value || n2.value == num1.value) {
            num2.value = n2.value;
            if (n3.value == num3.value || n3.value == num1.value) {
                num2.value = n3.value;
            } else {
                num2.value = n3.value;
            }
        } else {
            num2.value = n2.value;
        }
    } else {
        num2.value = n1.value;
    }
    console.log(num1.value);
    console.log(num2.value);
    console.log(num3.value);
}
function B3() {
    var
        n4 = document.getElementById("n4"),
        n5 = document.getElementById("n5"),
        n6 = document.getElementById("n6"),
        chan = document.getElementById("chan"),
        le = document.getElementById("le");
    chan.value = 0;
    le.value = 0;
    if (n4.value == "" || n5.value == "" || n6.value == "") {
    } else {
        if (Number(n4.value) % 2 == 0) {
            chan.value = Number(chan.value) + 1;
        } else {
            le.value = Number(le.value) + 1;
        }
        if (n5.value % 2 == 0) {
            chan.value = Number(chan.value) + 1;
        } else {
            le.value = Number(le.value) + 1;
        }
        if (n6.value % 2 == 0) {
            chan.value = Number(chan.value) + 1;
        } else {
            le.value = Number(le.value) + 1;
        }
    }
    console.log(chan.value);
    console.log(le.value);
}

function B4() {
    var
        n7 = document.getElementById("n7"),
        n8 = document.getElementById("n8"),
        n9 = document.getElementById("n9"),
        tamgiac = document.getElementById("tamgiac"),
        a = Number(n7.value),
        b = Number(n8.value),
        c = Number(n9.value);

    //kiểm tra xem ba cạnh có phải là ba cạnh của một tam giác hay không
    if (a < b + c && b < a + c && c < a + b) {
        //điều kiện tam giác vuông (định lý pitago)
        if (a * a == b * b + c * c || b * b == a * a + c * c || c * c == a * a + b * b) {
            tamgiac.value = "Đây là tam giác vuông";
            console.log(tamgiac);
        }
        //điều kiện tam giác đều là 3 cạnh bằng nhau
        else {
            if (a == b && b == c) {
                tamgiac.value = "Đây là tam giác đều";
                console.log(tamgiac);
            }
            //điều kiện tam giác cân là 2 cạnh bằng nhau
            else {
                if (a == b || a == c || b == c) {
                    tamgiac.value = "Đây là tam giác cân";
                    console.log(tamgiac);
                } else {
                    tamgiac.value = "Đây là tam thường";
                    console.log(tamgiac);
                }
            }
        }
    } else {
        tamgiac.value = "Ba cạnh a, b, c không phải là ba cạnh của một tam giác";
        console.log(tamgiac);
    }
}