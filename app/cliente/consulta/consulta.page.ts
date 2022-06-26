import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ClienteFornecedorModel } from 'src/app/model/clienteFornecedorModel';
import { ClienteService } from 'src/services/cliente.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
})
export class ConsultaPage implements OnInit {

  id : any;
  cliente: any = []; //ClienteFornecedorModel;

  constructor(private clientService: ClienteService,
              private route: ActivatedRoute, 
              private navCtrl: NavController,
              private router: Router) 
    {
    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state) {

        this.id = this.router.getCurrentNavigation().extras.state.clienteId;
        this.CarregaCliente(this.id);
         
      }
    });
   }

  ngOnInit() {
  }

  voltar(){
    this.navCtrl.back();
  }

  CarregaCliente(idcliente) {
    this.clientService.getCliente(idcliente)
      .then((json) => {
        
        this.cliente = json;
        console.log(this.cliente);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }
}