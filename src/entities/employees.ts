import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid"

@Entity("employees")
export class Employees {

    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    imageUrl: string

    @Column()
    office: string
    
    @Column()
    tags: string

    @Column()
    positionName: string

    @CreateDateColumn()
    hiringDate: Date

    @Column()
    employeeCode: string

    @Column()
    parentId: string

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}