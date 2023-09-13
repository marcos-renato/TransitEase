/*
criado por marcos renato pinto vicente
*/
?>
<style>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
</style>
<?php

$nome_documento={NOME_ARQUIVO}.'.txt';
//echo [P_WHERE]."</br>";

$pathFile     =  $this->Ini->path_doc . "/" .$nome_documento;
//inicio do método para criar o documento txt

$sql="SELECT
    (rpad(chapa, 16,' ')
    || to_char(dt_competencia, 'ddmmyyyy')
    || rpad('".{EVENTO_TOTVS}."',7,'0')
    || ':00'
    || lpad('00.00',15,' ')
    || lpad(trim(to_char(round(sum(nvl(vl_faturado,0.0)),2),'999999990D99')),15,' ')
    || lpad(trim(to_char(round(sum(nvl(vl_repasse,0.0)),2),'999999990D99')),15,' ')||'N') as linha
FROM
    ".[P_WHERE]." 
 group by 
	dt_competencia,chapa
    order by chapa";
echo "</br>1</br></br>".$sql."</br></br></br>";
sc_lookup(Dataset,$sql);
	
$i=0;
	
$documento=fopen($pathFile,"w");
while($i<count({Dataset})){
    fwrite($documento,{Dataset[$i][0]}."\r\n");
	$i++;
}
	  		
fclose($documento);	

// fim da geração do arquivo txt

// inicia o metodo para gravar no controle de geração de arquivo

$sql="SELECT
			cd_repasse,
			dt_competencia,
			cd_prestador,
			vl_repasse,
			CD_PLANTAO
		FROM
			".[P_WHERE];
//echo "</br>2</br></br>".$sql."</br></br></br>";
sc_lookup(Dataset,$sql);
	
$i=0;
		
while($i<count({Dataset})){
	
	
	
	
	
	
if({Dataset[$i][4]}==null){
		
		$sq="select cd_ctrl_ger_txt_repasse from ctrl_ger_txt_repasse where cd_prestador=".{Dataset[$i][2]}."  and cd_repasse='".{Dataset[$i][0]}."'";
		//echo "</br> i:".$i."</br></br>".$sq."</br></br></br>";
		
		
		sc_lookup(dtsq, $sq);
		
		if(count({dtsq})==1){
			$sql_m="UPDATE ctrl_ger_txt_repasse
						SET
							 cd_responsavel ='".[usr_login]."',
							 dt_geracao = sysdate,
							 competencia=to_char(to_date('".{Dataset[$i][1]}."','yyyy-mm-dd hh24:mi:ss'),'mm/yyyy'),
							 cd_prestador=".{Dataset[$i][2]}.",
							 CD_EVENTO_TOTVS='".{EVENTO_TOTVS}."',
							 NM_ARQUIVO='".{NOME_ARQUIVO}."'
						WHERE
							cd_ctrl_ger_txt_repasse = ".{dtsq[0][0]};
		//echo "</br> condição=1 i:".$i."</br></br>".$sql_m."</br></br></br>";
			sc_begin_trans();
			sc_exec_sql ($sql_m);
			sc_commit_trans ();

								}else{
			
			
				$sql_m="INSERT INTO ctrl_ger_txt_repasse (
								cd_ctrl_ger_txt_repasse,
								cd_responsavel,
								dt_geracao,
								cd_repasse,
								competencia,
								cd_prestador,
								CD_EVENTO_TOTVS,
								NM_ARQUIVO,
								cd_plantao
							) VALUES (
								SEQ_CD_CTRL_GER_TXT_REPASSE.nextval,
								'".[usr_login]."',
								sysdate,
								".{Dataset[$i][0]}.",
								to_char(to_date('".{Dataset[$i][1]}."','yyyy-mm-dd hh24:mi:ss'),'mm/yyyy'),
								".{Dataset[$i][2]}.",
								'".{EVENTO_TOTVS}."',
								'".{NOME_ARQUIVO}."',
								".{Dataset[$i][4]}."
								
							)";
				
			           }	
		
	////////////////////////////////////////////////////////////////////////////////////	
		
		}else{
			
			
			
	$sq="select cd_ctrl_ger_txt_repasse from ctrl_ger_txt_repasse where cd_prestador=".{Dataset[$i][2]}."  and CD_PLANTAO=".{Dataset[$i][4]};
		//echo "</br> i:".$i."</br></br>".$sq."</br></br></br>";
		sc_lookup(dtsq, $sq);
		
			
			
			if(count({dtsq})==1){
			$sql_m="UPDATE ctrl_ger_txt_repasse
						SET
							 cd_responsavel ='".[usr_login]."',
							 dt_geracao = sysdate,
							 competencia=to_char(to_date('".{Dataset[$i][1]}."','yyyy-mm-dd hh24:mi:ss'),'mm/yyyy'),
							 cd_prestador=".{Dataset[$i][2]}.",
							 CD_EVENTO_TOTVS='".{EVENTO_TOTVS}."',
							 NM_ARQUIVO='".{NOME_ARQUIVO}."'
						WHERE
							cd_ctrl_ger_txt_repasse = ".{dtsq[0][0]};
		//echo "</br> condição=1 i:".$i."</br></br>".$sql_m."</br></br></br>";
			sc_begin_trans();
			sc_exec_sql ($sql_m);
			sc_commit_trans ();

		
			if({Dataset[$i][0]}===null){
					$sql_m="INSERT INTO ctrl_ger_txt_repasse (
								cd_ctrl_ger_txt_repasse,
								cd_responsavel,
								dt_geracao,
								competencia,
								cd_prestador,
								CD_EVENTO_TOTVS,
								NM_ARQUIVO,
								cd_plantao
							) VALUES (
								SEQ_CD_CTRL_GER_TXT_REPASSE.nextval,
								'".[usr_login]."',
								sysdate,
								to_char(to_date('".{Dataset[$i][1]}."','yyyy-mm-dd hh24:mi:ss'),'mm/yyyy'),
								".{Dataset[$i][2]}.",
								'".{EVENTO_TOTVS}."',
								'".{NOME_ARQUIVO}."',
								".{Dataset[$i][4]}."
								
							)";
				
			
				}else{
				$sql_m="INSERT INTO ctrl_ger_txt_repasse (
								cd_ctrl_ger_txt_repasse,
								cd_responsavel,
								dt_geracao,
								cd_repasse,
								competencia,
								cd_prestador,
								CD_EVENTO_TOTVS,
								NM_ARQUIVO,
								cd_plantao
							) VALUES (
								SEQ_CD_CTRL_GER_TXT_REPASSE.nextval,
								'".[usr_login]."',
								sysdate,
								".{Dataset[$i][0]}.",
								to_char(to_date('".{Dataset[$i][1]}."','yyyy-mm-dd hh24:mi:ss'),'mm/yyyy'),
								".{Dataset[$i][2]}.",
								'".{EVENTO_TOTVS}."',
								'".{NOME_ARQUIVO}."',
								".{Dataset[$i][4]}."
								
							)";
				}
		
	}
	
	
	
	    //echo "</br> condição!=1 i:".$i."</br></br>".$sql_m."</br></br></br>";
			sc_begin_trans();
			sc_exec_sql ($sql_m);
			sc_commit_trans ();

			}
		
	
	$i++;
	

}
//termino da gravação do controle




//inicio metodo para realizar o download do arquifo
echo("<table id='customers'><th><h2>Click no link abaixo para Download</h2></th><tr><td><center>");
echo("<h3><a href='http://172.18.2.246:8595/sgpm/download/?nome=$nome_documento&caminho=$pathFile'>$nome_documento</a><h3> ");
echo("</center></td></tr><tr><td><h3>Click no botão 'OK' para retornar a pagina</br> anterior </h3></td></tr></table>");