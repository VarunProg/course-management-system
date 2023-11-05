import classNames from 'classnames';
import React, { FC, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../utils/constant';
import classes from './Header.module.scss';
import { Bucket, Search } from "react-bootstrap-icons";
import { Form, InputGroup } from 'react-bootstrap';

export const Header: FC = () => {
  const { pathname } = useLocation();
  const navRef = useRef();
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={classes.header}>
        COMPLORI
      </header>
    </>
  )
};
