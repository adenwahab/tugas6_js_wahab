class gempa{
    constructor(nomor,lokasi,skala){
        this.nomor = nomor;
        this.lokasi = lokasi;
        this.skala = skala;
    }

    dampak(){
        let dampakgempa;
        if (this.skala <= 2) {
            dampakgempa = "Gempa tidak terasa";
            
        } else if (this.skala <= 4) {
            dampakgempa = "Bangunan retak-retak";
        } else if (this.skala <= 6){
            dampakgempa = "Bangunan roboh";
        } else if (this.skala > 6){
            dampakgempa = "Selain bangunan roboh & berpotensi tsunami";
        }else{}

        return dampakgempa;
    }   
    infoGempa(){
        document.write(`<tr> 
            <td>${this.nomor}</td>
            <td>${this.lokasi}</td>
            <td>${this.skala}</td>
            <td>${this.dampak()}</td>
        </tr>`);
    }
}	
    
    // Buat 8 object gempa
    let gempa1 = new gempa(1,"Aceh", 8.2);
    let gempa2 = new gempa(2,"Jawa Barat", 5.6);
    let gempa3 = new gempa(3,"Yogyakarta", 3.7);
    let gempa4 = new gempa(4,"Bali", 1.8);
    let gempa5 = new gempa(5,"Palu", 7.4);
    let gempa6 = new gempa(6,"Sulawesi", 5.3);
    let gempa7 = new gempa(7,"Papua", 6.1);
    let gempa8 = new gempa(8,"Jakarta", 1.5);

    // Tampilkan data gempa
    gempa1.infoGempa(); 
    gempa2.infoGempa(); 
    gempa3.infoGempa();
    gempa4.infoGempa(); 
    gempa5.infoGempa(); 
    gempa6.infoGempa();
    gempa7.infoGempa(); 
    gempa8.infoGempa(); 