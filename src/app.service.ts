import { Injectable } from '@nestjs/common';
import  axios from 'axios';
// import * as Etsy  from 'etsy-ts'
// import * as  Etsy  from 'etsyjs';
// import { Etsy } from 'etsy-api';
// import * as Etsy from 'etsy-js';
import { EtsyApiService } from './etsy-api.service';
@Injectable()
export class AppService {
  constructor(private readonly etsyApiService: EtsyApiService) {}

  //   const etsyAuth = {
  //     keystring: 'f8b4fvpxce6myx1si4wdv46d',
  //     secret: 'r4vyevxyv3',
  //     callbackURL: 'sa',
  //   };
  //   this.etsy = new Etsy(etsyAuth);
  // }
    
  
    // this.etsy = new EtsyApi('f8b4fvpxce6myx1si4wdv46d', 'r4vyevxyv3');
    // this.etsy = new EtsyApi('<YOUR_KEYSTRING>', '<YOUR_SHARED_SECRET>');

  getHello(): string {
    return 'Hello World!';
  }

async createDraftListing( listingData) {
  
  // etsy = new EtsyApi('<YOUR_KEYSTRING>', '<YOUR_SHARED_SECRET>');
  // etsy = new EtsyApi('f8b4fvpxce6myx1si4wdv46d', 'r4vyevxyv3');
  
  // etsy = new EtsyApi('<YOUR_API_KEY>', '<YOUR_API_SECRET>');
  //  etsy.auth.setAccessToken('<YOUR_ACCESS_TOKEN>', '<YOUR_ACCESS_SECRET>');
 
  // try {
  //   const response = await this.etsyApiService.etsy.listings.create(listingData);
  //   return response.results[0].listing_id;
  // } catch (error) {
    // Handle error
  // }

  
}

async generateAccessToken() {
  // const auth = Buffer.from(this.CLIENT_ID + ":" + this.APP_SECRET).toString("base64")
  // let url ='https://api.etsy.com/v3/public/oauth/token';
try{
  let url =`https://api.etsy.com/v3/public/oauth/token?
  grant_type=authorization_code
  &client_id=f8b4fvpxce6myx1si4wdv46d
  &redirect_uri=https://www.example.com/some/location
  &code=bftcubu-wownsvftz5kowdmxnqtsuoikwqkha7_4na3igu1uy-ztu1bsken68xnw4spzum8larqbry6zsxnea4or9etuicpra5zi
  &code_verifier=vvkdljkejllufrvbhgeiegrnvufrhvrffnkvcknjvfid`
  // const data = 'grant_type=authorization_code';
  let data={
    grant_type:"authorization_code",
    client_id:"f8b4fvpxce6myx1si4wdv46d",
    redirect_uri:"https://www.example.com/some/location",
    code:"bftcubu-wownsvftz5kowdmxnqtsuoikwqkha7_4na3igu1uy-ztu1bsken68xnw4spzum8larqbry6zsxnea4or9etuicpra5zi",
  code_verifier:"vvkdljkejllufrvbhgeiegrnvufrhvrffnkvcknjvfid"
  }
//  const url1= 'https://www.etsy.com/oauth/connect'
 const url1=`https://www.etsy.com/oauth/connect?
 response_type=code
 &redirect_uri=https://www.example.com/some/location
 &scope=transactions_r%20transactions_w
 &client_id=1aa2bb33c44d55eeeeee6fff&state=superstate
 &code_challenge=DSWlW2Abh-cf8CeLL8-g3hQ2WQyYdKyiu83u_s7nRhI
 &code_challenge_method=S256`;
  const response = await axios.post(url1  );
  console.log("response",response);
  
  return response.data.access_token;
}catch(error){
  console.log("error",error);
  
}
}

  async test(data) {
    console.log("input data",data);
    
// Keystring f8b4fvpxce6myx1si4wdv46d  
// Shared secret r4vyevxyv3 
    try{
    const url =`https://openapi.etsy.com/v3/application/shops/41421843/listings`
    const result = await axios.post(url,data,{
      headers:{
       
      'x-api-key': 'f8b4fvpxce6myx1si4wdv46d',
      'sharedSecret': 'r4vyevxyv3',
        // 'api-key': 'f8b4fvpxce6myx1si4wdv46d',

      }
    });
    return result; 
    }

    catch(error){
      console.log("error",error);
      
    }

    
  }



}
