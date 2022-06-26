import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { EmpreendimentoService } from 'src/services/empreendimento.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
})
export class ConsultaPage implements OnInit {
  id: any;
  empreendimento: any = [];

  constructor(private empreendimentoService: EmpreendimentoService,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        console.log('acesso a tela consulta');
        this.id = this.router.getCurrentNavigation().extras.state.empreendimentoId
        this.CarregaEmpreendimento(this.id);
      }
    });
  }

  ngOnInit() {
  }

  voltar(){
    this.navCtrl.back();
  }
  CarregaEmpreendimento(idEmpreendimento) {
    this.empreendimentoService.getEmpreendimento(idEmpreendimento)
      .then((json) => {

        this.empreendimento = json;
        console.log(this.empreendimento);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }
}
