package com.mycompany.aulavinicius1

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class AulaVinicius1 {

    public static void main(String[] args) {
        String titulo = "Aula 1 - Introdução ao Java";
        String conteudo = "Conceitos básicos, sintaxe, etc.";
        criarAula(titulo, conteudo);
    }

    public static void criarAula(String titulo, String conteudo) {
        // Crie uma pasta para a aula
        File pastaAula = new File("aulas/" + titulo);
        pastaAula.mkdirs();

        int i = 2;
        while (true) {
            // Crie um arquivo para o conteúdo da aula
            File arquivoConteudo = new File(pastaAula, "aula" + i + ".ejs");
            if (!arquivoConteudo.exists()) {
                try {
                    arquivoConteudo.createNewFile();

                    // Escreva o conteúdo no arquivo
                    FileWriter writer = new FileWriter(arquivoConteudo);
                    writer.write(conteudo);
                    writer.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
                break;
            }
            i++;
        }
    }
}
