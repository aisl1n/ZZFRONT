export interface All {
  categoryCode:       string;
  categoryName:       string;
  facets:             Facet[];
  products:           Product[];
  breadcrumbCategory: BreadcrumbCategory[];
}

export interface BreadcrumbCategory {
  linkClass: string;
  name:      string;
  url:       string;
}

export interface Facet {
  category:    boolean;
  code:        string;
  multiSelect: boolean;
  name:        string;
  priority:    number;
  values:      Value[];
  visible:     boolean;
  topValues?:  Value[];
}

export interface Value {
  code:        string;
  count:       number;
  hasChildren: boolean;
  name:        string;
  query:       TopValueQuery;
  selected:    boolean;
}

export interface TopValueQuery {
  query: QueryQuery;
  url:   string;
}

export interface QueryQuery {
  value: string;
}

export interface Product {
  allImages:               Image[];
  availableInStore:        boolean;
  categories:              Category[];
  code:                    string;
  color:                   string;
  colorName:               string;
  description:             string;
  favorited:               boolean;
  hasPriceVariations:      boolean;
  hasVideo:                boolean;
  images:                  Image[];
  legacySKU:               string;
  mobileStampImage:        string;
  name:                    string;
  price:                   Price;
  productType:             ProductType;
  selectedColor:           boolean;
  sellable:                boolean;
  sellableOmni:            boolean;
  showVideoOnCategoryPage: boolean;
  sizesAvailabilityInfo:   SizesAvailabilityInfo[];
  stampImage:              string;
  url:                     string;
  variantOptions:          VariantOption[];
  volumePricesFlag:        boolean;
}

export interface Image {
  format:    Format;
  imageType: ImageType;
  url:       string;
}

export enum Format {
  FormatThumbnail = "thumbnail",
  Hires = "Hires",
  Lores = "Lores",
  Midres = "Midres",
  Product = "product",
  Search = "search",
  Thumbnail = "Thumbnail",
  Zoom = "zoom",
}

export enum ImageType {
  Gallery = "GALLERY",
  Hover = "HOVER",
  Primary = "PRIMARY",
}

export interface Category {
  code?: string;
  title: string;
  imageUrl:   string;
}

export interface Price {
  currencyIso:    CurrencyISO;
  formattedValue: string;
  priceType:      PriceType;
  value:          number;
}

export enum CurrencyISO {
  Brl = "BRL",
}

export enum PriceType {
  Buy = "BUY",
}

export enum ProductType {
  Shoe = "shoe",
}

export interface SizesAvailabilityInfo {
  available: boolean;
  code:      string;
  size:      string;
}

export interface VariantOption {
  code:     string;
  sellable: boolean;
}
