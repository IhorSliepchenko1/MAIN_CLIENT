import { CiLogout } from "react-icons/ci"

import {
     Button,
     Navbar,
     NavbarBrand,
     NavbarContent,
     NavbarItem,
} from "@nextui-org/react"
import { useDispatch, useSelector } from "react-redux"
import { selectIsAuthenticated, logout } from "../../../features/user/userSlice"
import { useNavigate } from "react-router-dom"
import { ToggleTheme } from "../toggle-them"

export const Header = () => {

     const isAuthenticated = useSelector(selectIsAuthenticated)
     const dispatch = useDispatch()
     const navigate = useNavigate()

     const handleLogout = () => {
          dispatch(logout())
          navigate(`/auth`)
     }

     return (
          <Navbar>
               <NavbarBrand>
                    <p className="font-bold text-inherit">Network Social</p>
               </NavbarBrand>

               <ToggleTheme />

               <NavbarContent justify="end">

                    <NavbarItem>
                         {isAuthenticated && (
                              <Button
                                   color="default"
                                   variant="flat"
                                   className="gap-2"
                                   onClick={handleLogout}
                              >
                                   <CiLogout /> <span>Выйти</span>
                              </Button>
                         )}
                    </NavbarItem>
               </NavbarContent>
          </Navbar>
     )
}