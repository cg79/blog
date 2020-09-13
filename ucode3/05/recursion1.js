

function mul(n) {
    if(n === 1) {
        return 1;
    }
    // asta se executa doar daca n > 1

    return n * mul(n-1);

}