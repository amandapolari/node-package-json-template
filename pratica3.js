function iterate(num) {
    for (let i = 0; i < num; i++) {
        console.log(`Reproduzindo console.log número ${i + 1}`);
    }
}

iterate(process.argv[2]);
