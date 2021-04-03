import {Mark} from "../../domain/mark";
import {MarkDto} from "./mark-dto";

export class MarkToMarkDtoMapper {
  map({ id, folder, title, link, type, tags, description, date }: Mark): MarkDto {
    return {
      //TODO: Set user
      userId: -1,
      id: id,
      folder: folder,
      title: title,
      link: link,
      type: type,
      tags: tags,
      description: description,
      date: date
    }
  }
}
