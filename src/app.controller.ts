import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service'
import { testDto } from './dtos/test.dto';
@ApiTags('esty')
@ApiBearerAuth()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Post('/listings/draft')
async createDraftListing(@Body() listingData: testDto) {

  // Use the Etsy API client to create a draft listing
  return await this.appService.createDraftListing(listingData);
}
  @Get()
 async getHello() {
    return await this.appService.generateAccessToken();
  }

  @Post()
  async test(@Body() data:testDto) {
    return await this.appService.test(data);
  }  
}
