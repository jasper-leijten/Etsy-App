import { ApiProperty } from "@nestjs/swagger";

export class testDto
{
    @ApiProperty()
    quantity : Number

    @ApiProperty()
title :string

@ApiProperty()
description:  string

@ApiProperty()
price:	GLfloat 

@ApiProperty()
who_made: string

// Enum: "i_did" "someone_else" "collective"

@ApiProperty()
when_made :string
// Enum: "made_to_order" "2020_2023" "2010_2019" "2004_2009" "before_2004"
//  "2000_2003" "1990s" "1980s" "1970s" "1960s" "1950s" "1940s" "1930s" 
//  "1920s" "1910s" "1900s" "1800s" "1700s" "before_1700"

 @ApiProperty()
taxonomy_id	: number 

}