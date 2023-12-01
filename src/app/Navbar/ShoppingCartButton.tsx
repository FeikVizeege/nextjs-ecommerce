"use client";

import { ShoppingCart } from "@/lib/db/cart";
import { formatPrice } from "@/lib/format";
import { IoCartOutline } from "react-icons/io5";
import Link from "next/link";

interface ShopppingCartButtonProps {
    cart: ShoppingCart | null;
}

export default function ShopppingCartButton({
    cart
}: ShopppingCartButtonProps) {

    function closeDropdown() {
        const elem = document.activeElement as HTMLElement;

        if (elem) {
            elem.blur();
        }
    }

    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn-ghost btn-circle btn">
                <div className="indicator">
                    <IoCartOutline size={28}/>
                    <span className="badge badge-sm indicator-item">
                        {cart?.size || 0}
                    </span>
                </div>
            </label>
            <div tabIndex={0} className="card dropdown-content card-compact mt-3 w-52 bg-base-100 shadow z-30">
                <div className="card-body">
                    <span className="text-lg font-bold">
                        {cart?.size || 0} Items
                    </span>
                    <span className="text-info">
                        Subtotal: {formatPrice(cart?.subtotal || 0)}
                    </span>
                    <div className="card-actions">
                        <Link href="/cart" 
                            className="btn btn-primary btn-block"
                            onClick={closeDropdown}
                        >
                            View Cart
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}