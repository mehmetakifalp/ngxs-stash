import { AddToCard } from "../model/add-to-card.model";
import { State } from "@ngxs/store";

export class AddToCardStateModel {
  addtocard: AddToCard
}
@State<AddToCardStateModel>({
  name: "addtocard",
  defaults: {

  },
  cardForm: {

  }
})
