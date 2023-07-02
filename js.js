function arrange_int() {
    var
        n1 = document.getElementById("n1"),
        n2 = document.getElementById("n2"),
        n3 = document.getElementById("n3"),
        num1 = document.getElementById("num1"),
        num2 = document.getElementById("num2"),
        num3 = document.getElementById("num3"),
        n;
    a = n1.value;
    b = n2.value;
    c = n3.value;
    n = a;
    console.log(a, b, c);
    if (Number(a) > Number(b)) {
        n = b;
        b = a;
        a = n;
    }
    if (Number(a) > Number(c)) {
        n = c;
        c = a;
        a = n;
    }
    if (Number(b) > Number(c)) {
        n = c;
        c = b;
        b = n;
    }
    num1.value = a;
    num2.value = b;
    num3.value = c;
    console.log(num1.value);
    console.log(num2.value);
    console.log(num3.value);
}


function greeting() {
    var
        tv = document.getElementById("thanhvien"),
        tb = document.getElementById("thongbao"),
        lc = document.getElementById("loichao");
    ;
    switch (tv.value) {
        case 'Bố':
            lc.value = "Xin Chào 'Bố' Chúc Bạn Một Ngày Tốt Lành";
            console.log(lc.value);
            break;
        case 'Mẹ':
            lc.value = "Xin Chào 'Mẹ' Chúc Bạn Một Ngày Tốt Lành";
            console.log(lc.value);
            break;
        case 'Anh':
            lc.value = "Xin Chào 'Anh' Chúc Bạn Một Ngày Tốt Lành";
            console.log(lc.value);
            break;
        case 'Em':
            lc.value = "Xin Chào 'Em' Chúc Bạn Một Ngày Tốt Lành";
            console.log(lc.value);
            break;
        default:
            lc.value = "Xin Chào Bạn Vui Lòng Nhập Đúng Người Dùng Vd: Bố, Mẹ, Anh, Em";
            console.log(lc.value);

    }
}



function even_number() {
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

function triangle() {
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
