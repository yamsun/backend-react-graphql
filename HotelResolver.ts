import { Query, Resolver } from "type-graphql";
import { Hotel } from "./Hotel";

@Resolver()
export default class HotelResolver {

    @Query(() => [Hotel])
    hotelSelect() {
        return Hotel.find();
    }

}