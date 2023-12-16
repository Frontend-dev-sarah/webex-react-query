export type Products = ProductItem[]

export interface ProductItem {
    id: number
    slug: string
    name: string
    compl_name: any
    ean: string
    description: string
    code_product: string
    image_url: any
    last_date_update: string
    universe_id: number
    sub_universe_id: number
    created_at: string
    updated_at: string
    brand_id: number
    sale_unit: any
    is_disabled: any
    d3e: any
    label_cartuser: any
    multiplier: any
    category_id: any
    custom_sale_unit: any
    custom_price_divider: any
    custom_multiplier: any
    img_url_min: string
    brand: Brand
}

export interface Brand {
    id: number
    slug: string
    created_at: string
    updated_at: string
    name: string
    coding_id: string
    orders: number
}
