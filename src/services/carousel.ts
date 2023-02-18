import firestore from '@react-native-firebase/firestore';
import { FirebaseCollection } from 'constants/firebase-collection';
import { Carousel } from 'interfaces/carousel';

class ServiceClass {
  private readonly instance;

  constructor() {
    this.instance = firestore().collection(FirebaseCollection.Carousel);
    this.getCarousel = this.getCarousel.bind(this);
  }

  public async getCarousel(): Promise<Carousel[]> {
    const query = await this.instance.get();
    const carousel: Carousel[] = [];

    query.forEach((snapshot) => {
      const data = snapshot.data() as Carousel;
      const id = snapshot.id;

      carousel.push({ ...data, id });
    });

    return carousel;
  }
}

export const carouselInstance = new ServiceClass();
