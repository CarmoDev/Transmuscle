import { database, storage } from "../utils/Firebase";

export async function addAtleta(data, file) {
    const atletasRef = database.ref('Atletas');
    const newAtletaRef = atletasRef.push(); 
    const atletaId = newAtletaRef.key; 
  
    const atletaData = {
      ...data,
      id: atletaId, 
    };
  
    try {
      await newAtletaRef.update(atletaData);
      console.log('Dados do atleta adicionados com sucesso:', atletaId);
  
      if (file) {
        const storageRef = storage.ref();
        const pdfRef = storageRef.child(`pdfs/${data.email}_${file.name}`);
  
        await pdfRef.put(file);
        console.log('PDF salvo com sucesso!');
        const pdfDownloadURL = await pdfRef.getDownloadURL();
  
        // Salvar o URL do PDF no nó do atleta
        await newAtletaRef.update({ pdfDownloadURL });
        console.log('URL do PDF salvo no nó do atleta:', pdfDownloadURL);
      }
  
      return atletaId; 
    } catch (error) {
      console.error('Erro ao adicionar o atleta:', error);
      throw error;
    }
  }