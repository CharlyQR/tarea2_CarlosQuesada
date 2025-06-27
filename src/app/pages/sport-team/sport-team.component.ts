import { Component, inject, ViewChild } from "@angular/core";
import { ISportTeam } from "../../interfaces";
import { SportTeamFormComponent } from "../../components/sport-team/sport-team-form/sport-team-form.component";
import { SportTeamListComponent } from "../../components/sport-team/sport-team-list/sport-team-list.component";
import { TeamService } from "../../services/team.service";
import { PaginationComponent } from "../../components/pagination/pagination.component";
import { FormBuilder, Validators } from "@angular/forms";
import { ModalService } from "../../services/modal.service";
import { ModalComponent } from "../../components/modal/modal.component";


@Component({
  selector: "app-sport-team",
  standalone: true,
  imports: [
    SportTeamFormComponent,
    SportTeamListComponent,
    PaginationComponent,
    ModalComponent
  ],
  templateUrl: "./sport-team.component.html",
  styleUrls: ["./sport-team.component.scss"]
})
export class SportTeamComponent {
  public teamList: ISportTeam[] = []
  public teamService: TeamService = inject(TeamService);
  public fb: FormBuilder = inject(FormBuilder);
  public teamForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    coach: ['', Validators.required],
    stadium: ['', Validators.required],
    teamLogo: ['', Validators.required],
    founded: ['', Validators.required],
    isInClubsWorldCup: [false],
    players: [[]]
  });
  public modalService: ModalService = inject(ModalService);
  @ViewChild('editTeamModal') public editTeamModal: any;

  constructor() {
    this.teamService.getAll();
  }

  saveTeam(item: ISportTeam) {
    this.teamService.save(item);
  }

  updateTeam(item: ISportTeam) {
    this.teamService.update(item);
    this.modalService.closeAll();
    this.teamForm.reset();
  }

  openEditTeamModal(team: ISportTeam) {
    console.log("openEditTeamModal", team);
    this.teamForm.patchValue({
      id:JSON.stringify(team.id),
      name: team.name,
      coach: team.coach,
      stadium: team.stadium,
      teamLogo: team.teamLogo,
      founded: JSON.stringify(team.founded),
      isInClubsWorldCup: team.isInClubsWorldCup,
      players: team.players as any
    });
    this.modalService.displayModal('lg', this.editTeamModal);
  }

  deleteTeam(team: ISportTeam) {
    this.teamService.delete(team);
  }
}