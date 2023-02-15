import {Service} from 'interfaces/service';
import {ServiceSectionList} from 'interfaces/service-section-list';

export const fromServicesToSectionList = (
  services: Service[],
): ServiceSectionList[] => {
  if (!services.length) {
    return [];
  }

  return services.reduce((list, {type, id, title, imageUri}) => {
    const existedTypeIndex = list.findIndex(service => service.type === type);

    if (existedTypeIndex !== -1) {
      list[existedTypeIndex].data.push({id, title, imageUri});
    } else {
      list.push({
        type,
        data: [{id, title, imageUri}],
      });
    }

    return list;
  }, [] as ServiceSectionList[]);
};
