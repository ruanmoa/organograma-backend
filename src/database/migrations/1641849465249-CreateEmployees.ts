import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEmployees1641849465249 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "employees",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "imageUrl",
                        type: "varchar"
                    },
                    {
                        name: "office",
                        type: "varchar"
                    },
                    {
                        name: "tags",
                        type: "varchar"
                    },
                    {
                        name: "positionName",
                        type: "varchar"
                    },
                    {
                        name: "hiringDate",
                        type: "timestamp"
                    },
                    {
                        name: "employeeCode",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "parentId",
                        type: "varchar",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("employees")
    }
}
