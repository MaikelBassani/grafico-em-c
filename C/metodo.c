#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <time.h>
#include <math.h>
#define QTD 10000

typedef struct sort {
	int comparacoes;
	int troca;
	float segundos;
	char nome[50];
}Sort;

Sort merge;

int geraNumero(int vet[], int op) {
	merge.comparacoes = 0;
	merge.troca = 0;
	
	int i, j;
	switch (op) {
		case 1: // Ordenados
		for (i = 0; i < QTD; i++) {
			vet[i] = i + 1;
		}
		break;

		case 2: //Invertidos
			for (i = 0; i < QTD; i++) {
				vet[i] = QTD - i;
			}
			break;
	
		case 3: // Aleatórios
			for (i = 0; i < QTD; i++) {
			vet[i] = (int) (rand() % 10000);
			}
			break;
			
	}
	return vet;
}

Sort bubbleSort(int vetor[]) {
	clock_t t;
	t = clock();
	Sort bolha;
	int n = 1;
	int troca = 1;
	int i = 0;
	int aux;
	bolha.comparacoes= 0;
	bolha.troca = 0;
	bolha.segundos = 0;
	while (n <= QTD && troca == 1) {
		troca = 0;
		for (i = 0; i <= QTD - 2; i++) {
			bolha.comparacoes ++;
			if (vetor[i] > vetor[i + 1]) {
				troca = 1;
				bolha.troca++;
				aux = vetor[i];
				vetor[i] = vetor[i + 1];
				vetor[i + 1] = aux;
			}
		}
		n = n + 1;
	}
	t = clock() - t;
    bolha.segundos = ((float)t)/CLOCKS_PER_SEC;
	strcpy(bolha.nome,"Bubblesort");
	return bolha;
}

Sort insertionSort(int vetor[]){
	clock_t t;
	t = clock();
	Sort insercao;
	int i, j, eleito;
	insercao.comparacoes = 0;
	insercao.troca = 0;
	insercao.segundos = 0;
	for (i = 1; i <= QTD-1; i++) {	
		insercao.comparacoes ++;
		eleito = vetor[i];
		insercao.troca++;
		j = i - 1;
		while (j >= 0 && vetor[j] > eleito) {
			vetor[j + 1] = vetor[j];
			j = j - 1;
			insercao.troca++;
			insercao.comparacoes ++;
		}
		vetor[j + 1] = eleito;
		insercao.troca++;
	}
	t = clock() - t;
    insercao.segundos = ((float)t)/CLOCKS_PER_SEC;
	strcpy(insercao.nome,"Insertionsort");
	return insercao;
}

Sort selectionSort(int vetor[]){
	clock_t t;
	t = clock();
	Sort selecao;
	selecao.comparacoes = 0;
	selecao.troca = 0;
	selecao.segundos = 0;
	int i, j, eleito, pos, menor;
	
	for (i = 0; i <= QTD-2; i++) {
		eleito = vetor[i];
		menor = vetor[i + 1];
		pos = i + 1;
		selecao.troca++;
		selecao.comparacoes++;
		
		for (j = i + 2; j <= QTD - 1; j++) {
			selecao.comparacoes++;
			if (vetor[j] < menor) {
				menor = vetor[j];
				pos = j;
			}
		}
		if (menor < eleito) {
			vetor[i] = vetor[pos];
			vetor[pos] = eleito;
			selecao.troca++;
		}
	}
	t = clock() - t;
    selecao.segundos = ((float)t)/CLOCKS_PER_SEC;
	strcpy(selecao.nome,"Selectionsort");
	return selecao;
}

Sort mergeSort(int vetor[], int inicio, int fim) {
	int meio;
	clock_t t;
	t = clock();
	if (inicio < fim) {
		meio = (inicio + fim) / 2;
		mergeSort(vetor, inicio, meio);
		mergeSort(vetor, meio + 1, fim);
		intercalaMerge(vetor, inicio, fim, meio);
	}
	t = clock() - t;
    merge.segundos = ((float)t)/CLOCKS_PER_SEC;
	strcpy(merge.nome,"Mergesort");
	return merge;
}

void intercalaMerge(int vetor[], int inicio, int fim, int meio) {
	int poslivre = inicio, iniciovetor1 = inicio, iniciovetor2 = meio + 1, i;
	int aux[QTD];

	while (iniciovetor1 <= meio && iniciovetor2 <= fim) {
		if (vetor[iniciovetor1] < vetor[iniciovetor2]) {
			aux[poslivre] = vetor[iniciovetor1];
			iniciovetor1++;
		} else {
			aux[poslivre] = vetor[iniciovetor2];
			iniciovetor2++;
		}
		poslivre++;
		merge.comparacoes++;
	}
	for (i = iniciovetor1; i <= meio; i++) {
		aux[poslivre] = vetor[i];
		poslivre++;
	}
	for (i = iniciovetor2; i <= fim; i++) {
		aux[poslivre] = vetor[i];
		poslivre++;
	}
	for (i = inicio; i <= fim; i++) {
		vetor[i] = aux[i];
		merge.troca++;
	}
	
}

Sort quickSort(int vet[], int ini, int fim) {
	Sort rapido;
	rapido.comparacoes = 0;
	rapido.troca = 0;
	rapido.segundos = 0;
	
	clock_t t;
	t = clock();
	int pivo, aux, i, j, meio;
   	
   i = ini;
   j = fim;
   
   meio = (int) ((i + j) / 2);
   pivo = vet[meio];
   
   do{
   	rapido.comparacoes++;
      while (vet[i] < pivo){
      	rapido.comparacoes++;
      	i = i + 1;
	  }
      while (vet[j] > pivo){
      	rapido.comparacoes++;
      	j = j - 1;
	  }
      if(i <= j){
      	rapido.comparacoes++;
      	rapido.troca++;
         aux = vet[i];
         vet[i] = vet[j];
         vet[j] = aux;
         i = i + 1;
         j = j - 1;
      }
   }while(j > i);
   
   if(ini < j) {
   	 rapido.comparacoes++;
   	 quickSort(vet, ini, j);
   }
   if(i < fim) {
   	rapido.comparacoes++;
   	quickSort(vet, i, fim); 
   }  
	
	t = clock() - t;
    rapido.segundos = ((float)t)/CLOCKS_PER_SEC;
	strcpy(rapido.nome,"Quicksort");
	return rapido;
}

int main (void){
	int vetor[QTD];
	char teste[15];
	int operacao;
				
	for (operacao = 1; operacao <= 3; operacao++)
	{
		if (operacao == 1){
			FILE * pFile1;
			int n;
			char name [100];
			
			pFile1 = fopen ("myfile.json","w");
			fprintf (pFile1, "[{\n");
			fclose (pFile1);
		}
	
		Sort organizadores[5];
		
		organizadores[0] = bubbleSort(geraNumero(vetor, operacao));
		organizadores[1] = insertionSort(geraNumero(vetor, operacao));
		organizadores[2] = selectionSort(geraNumero(vetor, operacao));
		organizadores[3] = mergeSort(geraNumero(vetor, operacao),0,QTD - 1);
		organizadores[4] = quickSort(geraNumero(vetor, operacao),0,QTD - 1);
		
		FILE * pFile1;
		int n;
		char name [100];

		pFile1 = fopen ("myfile.json","a+");
		
		switch(operacao){
			case 1:
				strcpy(teste,"Ordenado");
				break;
			case 2:
				strcpy(teste,"Invertido");
				break;
			case 3:
				strcpy(teste,"Aleatorio");
				break;
		}
		
		int qualSort = 0;
		for (qualSort; qualSort < 5; qualSort++){
			if (qualSort != 0 || (operacao != 1 && qualSort == 0)){
				fprintf (pFile1, "{\n");
			}
			fprintf (pFile1, "\t\"Titulo\" : \"%s - %s\"\n", organizadores[qualSort].nome, teste);
			fprintf (pFile1, "\t\"Comparações\" : %d\n",organizadores[qualSort].comparacoes);
			fprintf (pFile1, "\t\"Trocas\" : %d\n",organizadores[qualSort].troca);
			fprintf (pFile1, "\t\"Segundos\" : %.2f\n",organizadores[qualSort].segundos);
			if (qualSort != 4){
				fprintf (pFile1, "},\n");
			}
		}
		
				
		if (operacao == 3){
			fprintf (pFile1, "}]");
		}
	
		fclose (pFile1);
	}
	printf("Vai toma no cu.");
}
