import { fieldToFieldConfig } from "graphql-tools";
import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'hotels_csv'})
@ObjectType()
export class Hotel extends BaseEntity {
    @Field(() => String)
    @Column()
    name: string;

    @Field(() => String)
    @Column()
    cuisines: string;

    @Field(() => String)
    @Column()
    featured_image: string;

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: string;
}

