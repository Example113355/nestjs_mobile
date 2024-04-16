import { ApiTags,ApiOperation, ApiBody,ApiParam,  } from '@nestjs/swagger';
export class UserDTO {
    id: number;
    name: string;
    age: number;
}